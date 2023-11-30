<script lang="ts">
    import Calculator from './Calculator';
    import School from "./School";
    const calculator = new Calculator();
    let schools : School[] = [];
    let grantsTotal : number = 0;
    let money : number = 0;

    function addSchool() {
        schools = [...schools, new School(1, 1, 600_000, 600_000, 50 , 10, 0)];
    }

    function calculate() {
        for (let i = 0; i < schools.length; i++) {
            schools[i].quotaCount = 0;
        }
        calculator.distributeStep2(money, schools);
        schools = schools;
    }
</script>

<div>
    <h1>Calculator</h1>
    <div>
        <label for="money">Money</label>
        <input id="money" type="number" bind:value={money} />
    </div>

    <div>
        {#each schools as school, i}
            <h2>School {i + 1}</h2>
            <div>
                <label for="q1">Q1</label>
                <input id="q1" type="number" bind:value={school.q1} />
            </div>

            <div>
                <label for="q2">Q2</label>
                <input id="q2" type="number" bind:value={school.q2} />
            </div>

            <div>
                <label for="w">W</label>
                <input id="w" type="number" bind:value={school.w} />
            </div>

            <div>
                <label for="avg">AVG</label>
                <input id="avg" type="number" bind:value={school.avg} />
            </div>

            <div>
                <label for="all">ALL</label>
                <input id="all" type="number" bind:value={school.all} />
            </div>

            <div>
                <label for="ss">SS</label>
                <input id="ss" type="number" bind:value={school.ss}  />
            </div>

            <div>
                {school.quotaCount}
            </div>
        {/each}

    </div>

    <div>
        <button on:click={addSchool}>Add school</button>
        <button on:click={calculate}>Calculate</button>
    </div>
</div>

<style>

</style>