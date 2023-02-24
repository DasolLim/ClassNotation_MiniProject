class Candidate{
    constructor(fullName, fullEmail){
        this.fullName = fullName;
        this.fullEmail = fullEmail;

        this.setFullName = function(name){
            this.fullName = name;
        }
        this.getFullName = function(){
            return this.fullName;
        }
        
        this.getFullEmail = function(email){
            this.fullEmail = email;
        }
        this.getFullEmail = function(){
            return this.fullEmail;
        }
    }
}
class Interview extends Candidate{
    constructor(candidate){
        super(candidate);
        this.candidate = candidate;

        this.setCandidate = function(candidate){
            this.candidate = candidate;
        }
        this.getCandidate = function(){
            return this.candidate;
        }
    }
    scheduleInterview(date){
        console.log(`An interview was scheduled with ${this.getCandidate().getFullName()} at ${date}`);
    }
}

class HRInterview extends Interview{
    constructor(candidate, questionaire){
        super(candidate);
        this.questionaire = questionaire;

        this.setQuestionaire = function(q){
            this.questionaire = q;
        }
        this.getQuestionaire = function(){
            return this.questionaire;
        }
    }
    scheduleInterview(date){
        super.scheduleInterview(date);
        console.log(`Interview questionnaire ${this.getQuestionaire()} will be sent to ${this.getCandidate().getFullEmail()}`);
    }
}
class TechnecialInterview extends Interview{
    constructor(candidate, platform) {
        super(candidate);
        this.plateform = platform;

        this.setPlateform = function(p){
            this.plateform = p;
        }
        this.getPlateform = function(){
            return this.plateform;
        }
    }
    scheduleInterview(date){
        super.scheduleInterview(date);
        console.log(`Interview platform ${this.getPlateform()} is configured`);
    }
}

let candidate1 = new Candidate ("John Smith", "jonhn@gmail.com");
let candidate2 = new Candidate ("Alice Wonder", "alice@gmail.com");

let hrInterview = new HRInterview(candidate1, ['Q1', 'Q2', 'Q3']);
let technecialInterview = new TechnecialInterview(candidate1, "HackerRank");

hrInterview.scheduleInterview("Jan. 1st");
technecialInterview.scheduleInterview("Feb. 1st");

hrInterview.candidate = candidate2;
technecialInterview.candidate = candidate2;

hrInterview.scheduleInterview("March 1st");
technecialInterview.scheduleInterview("April 1st");

