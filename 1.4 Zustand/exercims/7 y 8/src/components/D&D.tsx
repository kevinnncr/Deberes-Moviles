import React, { useState } from 'react';

function crapsSixFace(): number {
    return Math.ceil(Math.random() * 6);
  }

function abilityScore(): number {
    const results = Array.from({ length: 4 }, () => crapsSixFace());
    results.sort((a, b) => b - a);
    return results.slice(0, 3).reduce((sum, result) => sum + result, 0);
}

function calculateConstitutionModifier(constitution: number): number {
  return Math.floor((constitution - 10) / 2);
}

function calculateHitpoints(constitution: number): number {
  const constitutionModifier = calculateConstitutionModifier(constitution);
  return 10 + constitutionModifier;
}


const CharacterGenerator: React.FC = () => {
  const [character, setCharacter] = useState({
    strength: abilityScore(),
    dexterity: abilityScore(),
    constitution: abilityScore(),
    intelligence: abilityScore(),
    wisdom: abilityScore(),
    charisma: abilityScore(),
  });

  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = character;
  const constitutionModifier = calculateConstitutionModifier(constitution);
  const hitpoints = calculateHitpoints(constitution);

  return (
    <div>
      <h1> Character Generator</h1>
      <p>Strength: {strength}</p>
      <p>Dexterity: {dexterity}</p>
      <p>Constitution: {constitution}</p>
      <p>Intelligence: {intelligence}</p>
      <p>Wisdom: {wisdom}</p>
      <p>Charisma: {charisma}</p>
      <p>Constitution Modifier: {constitutionModifier}</p>
      <p>Hitpoints: {hitpoints}</p>
      <button onClick={() => setCharacter({
        strength: abilityScore(),
        dexterity: abilityScore(),
        constitution: abilityScore(),
        intelligence: abilityScore(),
        wisdom: abilityScore(),
        charisma: abilityScore(),
      })}>
        Generate New Character
      </button>
    </div>
  );
}

export default CharacterGenerator;
