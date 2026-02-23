/**
 * 🏏 Gully Cricket Scoreboard
 *
 * Mohalle ke bacche gully cricket khel rahe hain. Tu scorekeeper hai bhai!
 * Har ball ka outcome ek array mein diya gaya hai. Tujhe scoreboard banana hai.
 *
 * Ball outcomes:
 *   - 0 = dot ball (no run)
 *   - 1 to 6 = runs scored on that ball
 *   - -1 = WICKET! Batsman out ho gaya
 *
 * Rules:
 *   - Loop through each ball in the array using a for loop
 *   - Track: totalRuns, totalBalls (all balls including wickets),
 *     wickets, fours (ball === 4), sixes (ball === 6)
 *   - IMPORTANT: Agar 10 wickets ho gaye, toh STOP! (use break)
 *     Innings khatam. Remaining balls are not counted.
 *
 * Validation:
 *   - Agar balls ek array nahi hai ya empty array hai,
 *     return karo: { totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0 }
 *
 * @param {number[]} balls - Array of ball outcomes
 * @returns {{ totalRuns: number, totalBalls: number, wickets: number, fours: number, sixes: number }}
 *
 * @example
 *   cricketScoreboard([4, 0, 6, -1, 2, 1])
 *   // => { totalRuns: 13, totalBalls: 6, wickets: 1, fours: 1, sixes: 1 }
 *
 *   cricketScoreboard([])
 *   // => { totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0 }
 */
export function cricketScoreboard(balls) {
  // Your code here
  let totalBalls =0, totalRuns =0, wickets =0 ,fours=0 , sixes =0;
  if(!Array.isArray(balls) || balls.length ==0 )
    return {totalBalls , totalRuns ,wickets , fours, sixes};
  totalBalls = balls.length
  let i;
  for ( i =0 ; i < totalBalls;i++){
    if( balls[i] == -1) wickets++;   
    if (wickets >= 10){
       i++;
       break;
    }
    if(balls[i]==4) fours++;
    else if( balls[i]==6) sixes++; 
    totalRuns += balls[i] >=0 ? balls[i] : 0; 
   
  }
  totalBalls = i
  return { totalBalls,totalRuns ,wickets, fours, sixes};

}
