<script>
    export let style, color, content;
</script>

<table class="cyber-table {style} ac-purple {color}">
	<thead>
		<tr>
			<th>No.</th>
			<th>Module</th>
			<th>Enabled</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>mod_rewrite</td>
			<td><code>true</code></td>
			<td>Provides a rule-based rewriting engine to rewrite requested URLs on the fly</td>
		</tr>
		<tr>
			<td>2</td>
			<td>mod_cache</td>
			<td><code class="fg-red">false</code></td>
			<td>RFC 2616 compliant HTTP caching filter. Not to be confused with mod_cache_disk.</td>
		</tr>
		<tr>
			<td>3</td>
			<td>mod_ssl</td>
			<td><code>true</code></td>
			<td
				>Strong cryptography using the Secure Sockets Layer (SSL) and Transport Layer Security (TLS)
				protocols</td
			>
		</tr>
	</tbody>
</table>


