class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item, price, quantity): 
        self.items.append((item, price, quantity))
    
    def pop(self):
        if not self.items:
            raise Exception("Stack is empty")
        return self.items.pop()
    
    def display(self):
        print("Items in stack:")
        for i in self.items:
            print(i)


s = Stack()
s.push("Laptop", 60000, 10)
s.push("Mobile", 20000, 20)
s.push("Tablet", 15000, 30)
s.push("Chair", 5000, 40)
 s.display()

print("\nPopping items:")
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())

s.display()

try:
    s.pop()
except Exception as e:
    print(e)
