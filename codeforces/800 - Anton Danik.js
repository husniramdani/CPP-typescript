x = 6
s = 'ADD'

anton = (s.match(new RegExp("A", "g")) || []).length
danik = (s.match(new RegExp("D", "g")) || []).length

if(anton > danik) console.log("Anton");
else if(anton < danik) console.log("Danik");
else console.log("Friendship");