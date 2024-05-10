import { useState } from "react";
const ToRna = (sequence: string): string => {
  let rnaSequence = '';

  for (let i = 0; i < sequence.length; i++) {
    const nucleotide = sequence[i];

    if (nucleotide === 'G') {
      rnaSequence += 'C';
    } else if (nucleotide === 'C') {
      rnaSequence += 'G';
    } else if (nucleotide === 'T') {
      rnaSequence += 'A';
    } else if (nucleotide === 'A') {
      rnaSequence += 'U';
    } else {
      throw new Error('Invalid input DNA.');
    }
  }

  return rnaSequence;
};

const RnaConverter: React.FC = () => {
    const [dnaSequence, setDnaSequence] = useState('');
    const [rnaSequence, setRnaSequence] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputSequence = event.target.value;
      setDnaSequence(inputSequence);
      const result = ToRna(inputSequence);
      setRnaSequence(result);
    }
    return (
        <div>
          <input
            type="text"
            value={dnaSequence}
            onChange={handleInputChange}
            placeholder="Enter DNA sequence"
          />
          {rnaSequence && <div>= {rnaSequence}</div>}
        </div>
      );
}
export default RnaConverter;
