#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon May 18 10:21:08 2020

@author: louisvincent
"""


class Pile:
    """ 
    Création de l'objet Pile 
    """
    
    def __init__(self):
        """
        Initialisation de la pile
        :return: None
        """
        
        self.accumulateur = []
        self.sommet = -1


    def est_vide(self):
        """
        Test pour savoir si la pile est vide
        :return: True ou False (boolean)
        """
        
        return self.sommet == -1
    
    
    def initialiser(self):
        """
        Réinitialisation de la pile 
        :return: None
        """
        
        self.__init__()


    def empiler(self,ajout): 
        """ 
        Ajout d'un élément 
        :param ajout: élément ajouté à la pile
        :return: None
        """
        
        self.accumulateur.append(ajout)
        self.sommet += 1
       
        
    def depiler(self): 
        """ 
        Retrait d'un élément 
        :return: entier dépilé
        """
        
        if not self.est_vide():
            elt_retire = self.accumulateur.pop(self.sommet)
            self.sommet -= 1
            return elt_retire
    
    
    def __repr__(self):
        """
        Affichage de la pile
        :return: chaine 
        """
        ch = ''
        for elt in self.accumulateur:
            ch ='!'+str(elt)+'!\n' + ch
        
        return ch
        

# =============================================================================
# PROGRAMME PRINCIPAL
# =============================================================================


if __name__ == '__main__':
    pile = Pile()
    pile.empiler(3)
    pile.empiler(6)
    pile.empiler(8)
    pile.empiler(10)
    
    print(pile)
    assert pile.accumulateur == [3,6,8,10]
    
    assert pile.depiler() == 10
    assert pile.accumulateur == [3,6,8]
    pile.depiler()
    pile.depiler()
    assert pile.accumulateur == [3]
    pile.depiler()
    
    assert pile.est_vide()
      
    pile.empiler(3)
    pile.empiler(6)
    assert pile.est_vide() == False
    pile.empiler(8)
    pile.initialiser()
    print(pile)
    
    assert pile.est_vide()



