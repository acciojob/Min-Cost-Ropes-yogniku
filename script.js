function mincost(arr)
{ 
//write your code here
// return the min cost
  heapq.heapify(arr)  # Convert the array into a min-heap
    
    cost = 0
    
    # Continue until there is only one rope left
    while len(arr) > 1:
        # Extract the two shortest ropes from the heap
        rope1 = heapq.heappop(arr)
        rope2 = heapq.heappop(arr)
        
        # Calculate the cost of connecting these two ropes
        combined_cost = rope1 + rope2
        
        # Add the combined cost to the total cost
        cost += combined_cost
        
        # Insert the combined rope back into the heap
        heapq.heappush(arr, combined_cost)
    
    return cost

}
print(mincost([4, 3, 2, 6]))  
print(mincost([1, 2, 3, 4, 5]))
module.exports=mincost;
