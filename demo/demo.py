class Product:
    def __init__(self, Flower_Id, Flower_Name, Flower_Price, Flower_Quantity):
        self.Flower_Id = Flower_Id
        self.Flower_Name = Flower_Name
        self.Flower_Price = Flower_Price
        self.Flower_Quantity = Flower_Quantity

flower1 = Product(101, "Gerbera", 23.7, 5000)
flower2 = Product(102, "Rose", 45.4, 7980) 

print(f"Flower Id: {flower1.Flower_Id}  Name: {flower1.Flower_Name}  Price: {flower1.Flower_Price:.2f}  Quantity: {flower1.Flower_Quantity}")
print(f"Flower Id: {flower2.Flower_Id}  Name: {flower2.Flower_Name}  Price: {flower2.Flower_Price:.2f}  Quantity: {flower2.Flower_Quantity}")
