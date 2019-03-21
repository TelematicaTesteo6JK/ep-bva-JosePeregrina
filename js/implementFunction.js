'use strict'
/*
    author:@José Luis Peregrina Rosales 6°J
    
    I chose the first exercise (the parking situation) in the segment 
    of EQUIVALENCE of PARTITIONING and  BOUNDARY VALUE ANALISIS 
*/
console.log('Program online...');

var fees = {'Little bit hours':10, 'Some hours':9, 'Many hours':7};

function calculateParkingCost(hours){
    let amount = 0;
    if(hours > 0){
        if(hours <= 5) return amount = hours * fees["Little bit hours"];
        else if(hours <= 10) return amount = hours * fees["Some hours"];
        else return amount = hours * fees["Many hours"];
    }
    return 'Invalid value. This function only acept positive values';
}

