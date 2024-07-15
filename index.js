// const calculateRankForData = (data) => {
//     const rankRangeArray = [];
//     let previousMaxPercentage = -1;
//     let highestPercentage = 0;
//     const randomLimit = 25 + Math.random() * 10;
//
//     // Determine the highest scoreRank
//     data.forEach((entry) => {
//         if (entry.scoreRank > highestPercentage) {
//             highestPercentage = entry.scoreRank;
//         }
//     });
//
//     data.forEach((entry, index) => {
//         const { scoreRank } = entry;
//
//         let minPercentage;
//         let maxPercentage;
//
//         if (previousMaxPercentage === -1) {
//             minPercentage = 0;
//         } else {
//             minPercentage = previousMaxPercentage;
//         }
//
//         maxPercentage = scoreRank + (data.length - index) + Math.floor(Math.random() * 10);
//         if (maxPercentage - minPercentage > highestPercentage * (randomLimit / 100)) {
//             maxPercentage = minPercentage + highestPercentage * (randomLimit / 100);
//         }
//
//         rankRangeArray.push({ minPercentage, maxPercentage });
//         previousMaxPercentage = maxPercentage;
//     });
//
//     data.forEach((entry) => {
//         const { scoreRank } = entry;
//         const matchedRange = rankRangeArray.find(range =>
//             scoreRank >= range.minPercentage && scoreRank <= range.maxPercentage
//         );
//
//         entry.rankRange = matchedRange ? `${matchedRange.minPercentage.toFixed(2)} to ${matchedRange.maxPercentage.toFixed(2)}` : null;
//     });
//
//     let nullRankEntries = data.filter(entry => entry.rankRange === null);
//     nullRankEntries.forEach(entry => {
//         const { scoreRank } = entry;
//         const matchedRange = rankRangeArray.find(range =>
//             scoreRank >= range.minPercentage && scoreRank <= range.maxPercentage
//         );
//         entry.rankRange = matchedRange ? `${matchedRange.minPercentage.toFixed(2)} to ${matchedRange.maxPercentage.toFixed(2)}` : null;
//     });
// };
//
// // Example data
// const data = [
//     { _id: '1', userId: 'user1', scoreRank: 1.515 },
//     { _id: '2', userId: 'user2', scoreRank: 1.92 },
//     { _id: '3', userId: 'user3', scoreRank: 41.445 },
//     { _id: '4', userId: 'user4', scoreRank: 22.3 },
//     { _id: '5', userId: 'user5', scoreRank: 15.6 },
//     { _id: '6', userId: 'user6', scoreRank: 30.2 },
//     { _id: '7', userId: 'user7', scoreRank: 18.1 },
//     { _id: '8', userId: 'user8', scoreRank: 25.4 },
//     { _id: '9', userId: 'user9', scoreRank: 5.2 },
//     { _id: '10', userId: 'user10', scoreRank: 3.4 },
//     { _id: '11', userId: 'user11', scoreRank: 9.7 },
//     { _id: '12', userId: 'user12', scoreRank: 8.9 },
//     { _id: '13', userId: 'user13', scoreRank: 14.5 },
//     { _id: '14', userId: 'user14', scoreRank: 28.9 },
//     { _id: '15', userId: 'user15', scoreRank: 31.5 },
//     { _id: '16', userId: 'user16', scoreRank: 12.3 },
//     { _id: '17', userId: 'user17', scoreRank: 20.1 },
//     { _id: '18', userId: 'user18', scoreRank: 7.5 },
//     { _id: '19', userId: 'user19', scoreRank: 6.2 },
//     { _id: '20', userId: 'user20', scoreRank: 26.7 }
// ];
//
// calculateRankForData(data);
// console.log(data);


console.log("test again")
