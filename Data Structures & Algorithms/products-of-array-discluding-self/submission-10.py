class Solution:
    # naive
    def _productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(len(nums)):
            acc = 1
            for j in range(len(nums)):
                if i == j: 
                    continue
                acc *= nums[j]
            res.append(acc)
        return res
    
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = [1] * len(nums)
        postfix = [1] * len(nums)

        for i in range(len(nums)):
            prev = prefix[i - 1] if i > 0 else 1
            prefix[i] = prev * nums[i]
        
        for i in range(len(nums)-1, -1, -1):
            post = postfix[i + 1] if i < len(nums) - 1 else 1
            postfix[i] = post * nums[i]
        
        res = []
        for i in range(len(nums)):
            pre = prefix[i-1] if i > 0 else 1
            post = postfix[i+1] if i < len(nums) - 1 else 1
            res.append(pre * post)
        return res

# [1,2,4,6]
# [48,24,12,8]

