<script>
      import { onMount } from "svelte";

    const apiURL = "/api";
    let data = [], userId = '';

    onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
        userId = data[0].userId

    });
    // export let content;
// Concurent_Views: "2"
// ​​
// Title: "GTA Epic 5"
// ​​
// reloadTime: "60"
// ​​
// userId: "7246b02"

</script>


<div class="flex justify-center items-center min-h-screen">
  <!-- cyberpunk black -->
<section class=" max-w-6xl ">


<h2 class="cyber-h">Личный кабинет, {userId}</h2>
<!--colors" ac-yellow ac-red -->
<!--styles" 'cyber-style-1' 'cyber-style-2' -->



<table class="cyber-table cyber-style-1 ac-purple ac-red max-w-4xl">
	<thead>
		<tr>
			<th>No.</th>
			<th>Concurent Views</th>
			<th>Title</th>
			<th>reloadTime</th>
		</tr>
	</thead>
	<tbody>
    {#each data as {Concurent_Views, Title, reloadTime}, index }
		<tr>
			<td>{index + 1}</td>
			<td>{Concurent_Views}</td>
      <!-- <td><code class="fg-red">false</code></td> -->
      			<td>{Title}</td>
			<td><code>{reloadTime}</code></td>

		</tr>
    {/each}

	</tbody>
</table>
		</section>
</div>


<style>

</style>
