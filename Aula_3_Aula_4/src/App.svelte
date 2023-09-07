<script>
    import FaBalanceScale from 'svelte-icons/fa/FaBalanceScale.svelte'
	import GiBodyHeight from 'svelte-icons/gi/GiBodyHeight.svelte'

	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal


	// Função para calcular o IMC
	function calcularIMC() 
	{
		if (peso > 0 && altura > 0) 
		{
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
		} 

		else 
		{
			imc = 0;
		}
	}
</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
		<div class='input_container'>
			<div class='icon'><FaBalanceScale/></div>
			Peso (kg):  <input type="number" bind:value={peso} on:input={calcularIMC} />
		</div>
	</label>
	<label>
		<div class='input_container'>
			<div class='icon'><GiBodyHeight/></div>
			Altura (m):  <input type="number"  bind:value={altura} on:input={calcularIMC} /> 
		</div> 
	</label>
	
	{#if imc > 0}
		<p>Seu IMC é {imc}</p>
		{#if imc < 18.5}
		<p id="abaixo">Abaixo do peso</p>
		{:else if imc < 24.9}
		<p id="ideal">Peso ideal (parabéns)</p>
		{:else if imc < 29.9}
		<p id="acima">Levemente acima do peso</p>
		{:else if imc < 34.9}
		<p id="obeso1">Obesidade I</p>
		{:else if imc < 39.9}
		<p id="obeso2">Obesidade II (severa)</p>
		{:else}
		<p id="obeso3">Obesidade III (mórbida)</p>
		{/if}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	#abaixo {
			color: #cff302;
			font-size: 2em;
		}

	#ideal {
			color: #00fc15;
			font-size: 3em;
		}

	#acima {
			color: #e4e00afd;
			font-size: 4em;
		}

	#obeso1 {
			color: #ffd000;
			font-size: 5em;
		}

	#obeso2 {
			color: #ff7300;
			font-size: 6em;
		}

	#obeso3 {
			color: #ff0000;
			font-size: 7em;
		}

	.icon {
		color: blue;
        width: 32px;
        height: 32px;
		margin-right: 10px;
		margin-left: 10px;
	}

	.input_container {
		display: flex;
        align-items: center;
		justify-content: center;
	}
</style>