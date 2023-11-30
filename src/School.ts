class School {
    constructor(
        public q1: number,
        public q2: number,
        public w: number,
        public avg: number,
        public all: number,
        public ss: number,
        public quotaCount: number
    ) {}

    getEfficiency(): number {
        return this.q1 * this.q2 * this.w / this.avg;
    }

    getRational(schools: School[]): number {
        if (this.getDemandQuotaCount() === 0) return 0;
        let efficiencySum = 0;
        for (const s of schools) {
            if (s.getDemandQuotaCount() === 0) continue;
            efficiencySum += s.getEfficiency();
        }
        return this.getEfficiency() / efficiencySum;
    }

    getQuotaMoney(schools: School[], money: number): number {
        return Math.min(
            this.getClaimingMoney(),
            money * this.getRational(schools)
        );
    }

    getDemandQuotaCount(): number {
        return this.all - this.quotaCount;
    }

    getClaimingMoney(): number {
        return 5 * this.ss * Math.min(this.avg, 600000) - this.quotaCount * this.avg;
    }

    toString(): string {
        return `School(q1=${this.q1}, q2=${this.q2}, w=${this.w}, avg=${this.avg}, all=${this.all}, ss=${this.ss}, quotaCount=${this.quotaCount})`;
    }

}

export default School;


