
console.log(">> According to the Classes <<");

class election{
    constructor(partyName,obtainedVote,Area){
        this.partyName = partyName;
        this.obtainedVote = obtainedVote;
        this.Area = Area;
    }

    voteCount(){
        return `total votes are : ${this.obtainedVote}`
    }

    area(){
        return  `area is : ${this.Area} square km`
    }
}

const voter = new election("BJP","250000","250")
console.log(voter.voteCount())
console.log(voter.area())


console.log("**********************************");

console.log(">> According to the Js Prototypal functions <<");

// behind the scene 

function election2k24(partyName, votecount , areaCover){
    this.partyName = partyName
    this.votecount = votecount
    this.areaCover = areaCover
}

Object.prototype.totalVoating = function(){
    return `total votecount are : ${this.votecount}`
}

Object.prototype.votingArea = function(){
    return `area is : ${this.areaCover} square km`
}

const Voter = new election2k24("BJP","30707000","290")
console.log(Voter.totalVoating());
console.log(Voter.votingArea());
