<template>
	<section className="copyright">
		<div className="container-copyright">
			<p className="left">
				Fait avec ❤ par{" "}
				<Link
					href="https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/"
					passHref
				>
					<a className="link" title="Voir"> Tahiry </a> </Link
				>{" "} et{" "}
				<Link
					href="https://linkedin.com/in/harijaona-rajaonson/"
					passHref
				>
					<a className="link" title="Voir le profil LinkedIn">
						Hari
					</a>
				</Link>
				.
			</p>
			<p className="right">
				Copyright © {new Date().getFullYear()} Singer France, Tous
				droits réservés.
			</p>
		</div>
	</section>
</template>

<script>
/*
	Entry point for vue components
*/

export default {
	name: "RDV",
};
</script>
