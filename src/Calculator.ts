import School from "./School";

export default class Calculator {
    distributeStep2(money: number, schools: School[]): void {
        let moneyLeft: number = money;
        for (let i = 0; i < 5; i++) {
            let moneyDistributed: number = 0;
            for (const school of schools) {
                const receivedQuotaCount: number = Math.min(
                    school.getDemandQuotaCount(),
                    Math.floor(school.getQuotaMoney(schools, moneyLeft) / school.avg)
                );
                school.quotaCount += receivedQuotaCount;
                const receivedMoneyForSchool: number = receivedQuotaCount * school.avg;
                moneyDistributed += receivedMoneyForSchool;
            }
            moneyLeft -= moneyDistributed;

            console.log(`Money left: ${moneyLeft}`);
            console.log("Schools: ");
            schools.forEach(school => {
                console.log(school.toString());
            });
            console.log("=====================================");
        }
        // TODO: Implement the distribution of the remaining amount
    }
}

// Example usage
const schools: School[] = [
    new School(1, 1, 600000, 600000, 100, 30, 0),
    new School(1, 1, 600000, 600000, 100, 30, 0),
    new School(1, 1, 600000, 600000, 100, 30, 0),
    new School(1, 1, 600000, 600000, 100, 30, 0),
    new School(1, 1, 600000, 600000, 100, 30, 0)
];

const calculator = new Calculator();
calculator.distributeStep2(100000000, schools);
