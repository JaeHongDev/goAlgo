n = 800
count = 0

coin_types = [500,100,50,10]

for coin in coin_types :
    count += n
    print(count)
    n %= coin

print(count)
