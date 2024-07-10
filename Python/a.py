l=[2200,2350,2600,2130,2190];
# ammount spent on feb
print([1])
# total sum of first 3 months
total=l[0]+l[1]+l[2];
print("total: ",total)
# checkin any month is 2000 is used
for i in l:
    if(i==2000):
        print("used")
l[3]=l[3]-200
print("updated : ",l[3])