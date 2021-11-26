// Ask the Bob
// Instructions
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.

function hey(message) {
	// Code here
    const ans1 = 'Sure';
    const ans2 = 'Whoa, chill out!';
    const ans3 = "Calm down, I know what I'm doing!";
    const ans4 = 'Fine. Be that way!';
    const ans5 = 'Whatever.';

    const r = message.toUpperCase();

    if(message.slice(-1) === '?' && r!==message)
        return ans1;
    else if(message.slice(-1) !== '?' && r===message)
        return ans2;
    else if(message.slice(-1) === '?' && r===message)
        return ans3;
    else if(message === 'Bob')
        return ans4;
    return ans5;
}

console.log(hey('What are you doing?'));
console.log(hey('WHAT THE HECK'));
console.log(hey('HOW DID YOU DO THIS?'));
console.log(hey('Bob'));
console.log(hey('hey dude'));
