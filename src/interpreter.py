from time import sleep
from pile import *

class Interprerteur:
    """
    Initialisation de l'interpreteur
    """
    stopExecution = False
    speed = 1
    
    def __init__(self, n = 10):
        self.tableau = [0 for i in range(n)]
        self.pointeur = 0
    
    def parenthesage(self, instructions: str):
        """Parenthèsage

        Args:
            instructions (str): Le programme brainfuck

        Returns:
            tuple: Si le parenthèse est bon, si oui une liste de tuple des index des parenthèses
        """
        pile = Pile()
        positions_des_crochets = []

        for i in range(len(instructions)):
            char = instructions[i]

            if char == '[':
                pile.empiler(i)
            elif char == ']':
                indice_crochet_ouvrant = pile.depiler()
                positions_des_crochets.append((indice_crochet_ouvrant, i))
            
        return (pile.est_vide(), positions_des_crochets if pile.est_vide() else [])

    def interpreteur(self, instructions: str, call_js_function):
        """Interpreteur du language brainfuck

        Args:
            instructions (str): Le code

        Returns:
            list: Le tableau après execution du code
        """
        parenthesage = self.parenthesage(instructions)
        assert parenthesage[0], "Instruction non valide"
        instructionIndex = 0 # index de l'instruction en cours d'execution

        # tant qu'on est dans les limites du programme
        while instructionIndex < len(instructions):
            ignorer = False

            if self.stopExecution:
                self.stopExecution = False
                return

            # instruction actuelle
            char = instructions[instructionIndex]

            # avance le pointeur à droite si possible, sinon erreur.
            if char == '>':
                assert self.pointeur < len(self.tableau), "Brainfuck index out of range"
                self.pointeur += 1
                instructionIndex +=1
                call_js_function("move", '"right"')

            # recule le pointeur à gauche si possible, sinon erreur.
            elif char == '<':
                assert self.pointeur > 0, "Brainfuck index out of range"
                self.pointeur -= 1
                instructionIndex +=1
                call_js_function("move", '"left"')
            # augmente d'1 l'octet pointé
            elif char == '+':
                #j'ai mis l'assert en commentaire car le programme en amélioration ne prend pas en compte cette limite
                #assert self.tableau[self.pointeur] < 255, "Brainfuck does not support values bigger than one byte"
                self.tableau[self.pointeur] += 1
                instructionIndex +=1
                call_js_function("change", '"increment"')
            # soustrait d'1 l'octet pointé
            elif char == '-':
                #assert self.tableau[self.pointeur] > 0, "Brainfuck does not support negative values"
                self.tableau[self.pointeur] -= 1
                instructionIndex +=1
                call_js_function("change", '"decrement"')
            # Affiche le caractère pointé dans la table ASCII
            elif char == '.':
                print(chr(self.tableau[self.pointeur]))
                instructionIndex +=1
                call_js_function("printChar", "\"" + chr(self.tableau[self.pointeur]) + "\"")
            # Entre un nbre à la case pointée
            elif char == ',':
                instructionIndex +=1

                self.tableau[self.pointeur]  = call_js_function("userInput")
                    

            # Affiche l'octet pointé
            elif char == '!':
                print(self.tableau[self.pointeur])
                instructionIndex +=1
                call_js_function("printBytes", self.tableau[self.pointeur])

            # Entre dans une boucle
            elif char == '[':
                if self.tableau[self.pointeur] == 0:
                    for index_parenthese_ouvrante, index_parenthese_fermante in parenthesage[1]:
                        if index_parenthese_ouvrante == instructionIndex:
                            instructionIndex = index_parenthese_fermante + 1
                            break
                else:
                    instructionIndex +=1   
            # Sort de la boucle - entre dedans encore une fois
            elif char == ']':
                if self.tableau[self.pointeur] != 0:
                    for index_parenthese_ouvrante, index_parenthese_fermante in parenthesage[1]:
                        if index_parenthese_fermante == instructionIndex:
                            instructionIndex = index_parenthese_ouvrante + 1
                            break
                else:
                    instructionIndex +=1

            else:
                instructionIndex +=1 # ignore les autres caractères
                ignorer = True



            # wait `speed` ms
            if char != '[' and char != ']' and not ignorer :
                sleep(self.speed)

            call_js_function("changeInstructionIndex", instructionIndex)

        return self.tableau
        