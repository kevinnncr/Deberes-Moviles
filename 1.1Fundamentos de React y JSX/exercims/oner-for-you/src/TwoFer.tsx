import{ useState } from 'react';

function TwoFer() {
  const [user] = useState("kevin");

  

  return (
    <div>
      
        {user ? (
          <p>One for {user}, one for me</p>
        ) : (
          <p>One for you, one for me</p>
        )}
      </div>
   
  );
}

export default TwoFer;
