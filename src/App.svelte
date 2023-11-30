<script lang="ts">
    import Calculator from './Calculator';
    import School from "./School";
    const calculator = new Calculator();
    let schools : School[] = [];
    let results : number[] = [];
    let grantsTotal : number = 0;
    let money : number = 0;

    function addSchool() {
        schools = [...schools, new School(0, 0, 0, 0, 0, 0, 0)];
        results =
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
                {school.q1}
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
                <label for="ss">SS</label>
                <input id="ss" type="number" bind:value={school.avg}  />
            </div>

            <div>
                <label for="all">ALL</label>
                <input id="all" type="number" bind:value={school.avg} />
            </div>
        {/each}

    </div>

    <div>
        <button on:click={addSchool}>Add school</button>
        <button>Calculate</button>
    </div>
</div>

<style>

</style>