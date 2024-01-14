from api.api import Api
from pile import *

class Brainfuck:
    """
    Initialisation de l'interpreteur
    """
    
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

            if char is '[':
                pile.empiler(i)
            elif char is ']':
                indice_crochet_ouvrant = pile.depiler()
                positions_des_crochets.append((indice_crochet_ouvrant, i))
            
        return (pile.est_vide(), positions_des_crochets if pile.est_vide() else [])

    def interpreteur(self, instructions: str):
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
            # instruction actuelle
            char = instructions[instructionIndex]

            # avance le pointeur à droite si possible, sinon erreur.
            if char is '>':
                assert self.pointeur < len(self.tableau), "Brainfuck index out of range"
                self.pointeur += 1
                instructionIndex +=1
            # recule le pointeur à gauche si possible, sinon erreur.
            elif char is '<':
                assert self.pointeur > 0, "Brainfuck index out of range"
                self.pointeur -= 1
                instructionIndex +=1
            # augmente d'1 l'octet pointé
            elif char is '+':
                #j'ai mis l'assert en commentaire car le programme en amélioration ne prend pas en compte cette limite
                #assert self.tableau[self.pointeur] < 255, "Brainfuck does not support values bigger than one byte"
                self.tableau[self.pointeur] += 1
                instructionIndex +=1
            # soustrait d'1 l'octet pointé
            elif char is '-':
                assert self.tableau[self.pointeur] > 0, "Brainfuck does not support negative values"
                self.tableau[self.pointeur] -= 1
                instructionIndex +=1
            # Affiche le caractère pointé dans la table ASCII
            elif char is '.':
                print(chr(self.tableau[self.pointeur]))
                instructionIndex +=1
            # Entre un nbre à la case pointée
            elif char is ',':
                value = input("Entrez un caractère à insérer")
                assert ord(value) >= 0 and ord(value) <= 255, value + " ne peut être codé sur un byte"
                self.tableau[self.pointeur] = ord(value)
                instructionIndex +=1
            # Affiche l'octet pointé
            elif char is '!':
                print(self.tableau[self.pointeur])
                instructionIndex +=1
            # Entre dans une boucle
            elif char is '[':
                if self.tableau[self.pointeur] == 0:
                    for index_parenthese_ouvrante, index_parenthese_fermante in parenthesage[1]:
                        if index_parenthese_ouvrante == instructionIndex:
                            instructionIndex = index_parenthese_fermante + 1
                            break
                else:
                    instructionIndex +=1   
            # Sort de la boucle - entre dedans encore une fois
            elif char is ']':
                if self.tableau[self.pointeur] != 0:
                    for index_parenthese_ouvrante, index_parenthese_fermante in parenthesage[1]:
                        if index_parenthese_fermante == instructionIndex:
                            instructionIndex = index_parenthese_ouvrante + 1
                            break
                else:
                    instructionIndex +=1

        return self.tableau
        