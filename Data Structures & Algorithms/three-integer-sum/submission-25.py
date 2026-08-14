class Solution:
    # naive
    def _threeSum(self, nums: List[int]) -> List[List[int]]:

        res = []
        computed_triplets = {}
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j:
                    continue
                for k in range(len(nums)):
                    if j == k or i == k:
                        continue
                    n1 = nums[i]
                    n2 = nums[j]
                    n3 = nums[k]

                    all_sum = n1 + n2 + n3
                    if all_sum == 0:
                        arr = [n1,n2,n3]
                        arr.sort()
                        triplet_key = "".join(map(str, arr))
                        if triplet_key not in computed_triplets:
                            res.append([n1,n2,n3])
                            computed_triplets[triplet_key] = True

        return res
    
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        for i in range(len(nums) - 2):
            base = nums[i]
            if i > 0 and base == nums[i-1]: 
                continue

            l, r = i+1, len(nums)-1
            while l < r:
                sumAll = nums[l] + nums[r] + base

                if sumAll > 0:
                    r -= 1
                elif sumAll < 0:
                    l += 1
                else:
                    res.append(
                        [base, nums[r], nums[l]]
                    )

                    l += 1
                    r -= 1

                    while l < r and nums[l] == nums[l-1]:
                        l += 1
                    
                    while r > l and nums[r] == nums[r+1]:
                        r -= 1
                    
                    
        return res




