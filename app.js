let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let domainNames = [];
   
pronoun.forEach(a1 =>  
    adj.forEach(a2 =>
        noun.forEach (a3 => 
            domainNames.push(a1 + a2 + a3 +".com")
        )
    )
);

console.log(domainNames);