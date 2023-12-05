<script lang="ts">
    import Calculator from './Calculator';
    import School from "./School";
    import school from "./School";


    const calculator = new Calculator();
    let schools: School[] = [];
    let grantsTotal: number = 0;
    let money: string = 0;
    let tableHeaders: string[] = ['School Number','Q1','Q2','Average Income','Course Average',"Quotes School Need ","Number Of Success Stories" , 'Quotes Given', 'Money Given'];

    function addSchool() {
        schools = [...schools, new School(1, 1, 600_000, 600_000, 50, 10, 0)];
    }

    function calculate() {
        for (let i = 0; i < schools.length; i++) {
            schools[i].quotaCount = 0;
        }
        let strMoney : string = money;
        strMoney = strMoney.replace(/\s/g, '');
        console.log("Money in console " + parseFloat(strMoney));
        calculator.distributeStep2(parseFloat(strMoney), schools);
        schools = schools;
    }
    function deleteSchool(schoolToBeDeleted) {
        schools = schools.filter(school => school !== schoolToBeDeleted);
    }
</script>

<div>
    <h1>Calculator</h1>
    <div>
        <label for="money">Money</label>
        <input id="money" type="text" pattern="[0-9 ]+" bind:value={money}/>
    </div>


<!--    {#each schools as school, i}-->
<!--        <h3>School {i + 1}</h3>-->
<!--        <div>-->
<!--            <label for="q1">Q1</label>-->
<!--            <input id="q1" type="number" bind:value={school.q1}/>-->
<!--        </div>-->

<!--        <div>-->
<!--            <label for="q2">Q2</label>-->
<!--            <input id="q2" type="number" bind:value={school.q2}/>-->
<!--        </div>-->

<!--        <div>-->
<!--            <label for="w">W</label>-->
<!--            <input id="w" type="number" bind:value={school.w}/>-->
<!--        </div>-->

<!--        <div>-->
<!--            <label for="avg">AVG</label>-->
<!--            <input id="avg" type="number" bind:value={school.avg}/>-->
<!--        </div>-->

<!--        <div>-->
<!--            <label for="all">ALL</label>-->
<!--            <input id="all" type="number" bind:value={school.all}/>-->
<!--        </div>-->

<!--        <div>-->
<!--            <label for="ss">SS</label>-->
<!--            <input id="ss" type="number" bind:value={school.ss}/>-->
<!--        </div>-->

<!--        <div>-->
<!--            {school.quotaCount}-->
<!--        </div>-->
<!--    {/each}-->


    <div>
        <button on:click={addSchool}>Add school</button>
        <button on:click={calculate}>Calculate</button>
    </div>

    <div>
        <table id="myTable">
            <tr>
                {#each tableHeaders as header}
                <th>{header}</th>
                    {/each}
            </tr>
            {#each  schools as school, i}
                <tr>
                    <td>School {i+1}</td>
                    <td contenteditable="true" bind:innerHTML={school.q1} />
                    <td contenteditable="true" bind:innerHTML={school.q2} />
                    <td contenteditable="true" bind:innerHTML={school.w} />
                    <td contenteditable="true" bind:innerHTML={school.avg} />
                    <td contenteditable="true" bind:innerHTML={school.all} />
                    <td contenteditable="true" bind:innerHTML={school.ss} />
                    <td>{school.quotaCount}</td>
                    <td>{school.quotaCount*school.avg}</td>
                    <button class="DeleteSchoolButton" on:click={() => deleteSchool(school)}>
                        DELETE
                    </button>
                </tr>
                {/each}



        </table>
    </div>


</div>


<style>
    table {
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
    }

    th {
        text-transform: uppercase;
        cursor: pointer;
    }

    th, td {
        text-align: left;
        padding: 16px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2
    }
    tr, td {
        cursor: pointer;
    }
    .DeleteSchoolButton {
        color: red;
    }

</style>