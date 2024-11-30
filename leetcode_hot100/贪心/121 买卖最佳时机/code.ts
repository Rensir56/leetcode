/*
O(n)时间，采用贪心解决
 */

function maxProfit(prices: number[]): number {

    function max(a:number,b:number):number{
        return a>b? a:b;
    }

    let min_num:number = prices[0];
    let max_num:number = prices[0];
    let diff:number = 0;
    for(let i:number = 1; i < prices.length; i++){
        if (prices[i] < min_num){
            min_num = prices[i];
            max_num = prices[i];
            continue;
        }
        if(prices[i] > max_num){
            max_num = prices[i]
            diff = max(max_num-min_num,diff);
        }
    }

    return diff;
};