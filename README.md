# ADN-mutante

## Ejecución

```bash
  docker-compose build
  docker-compose up
```

## Endpoints

```javascript
  // EJEMPLOS DE BODY
 const human = ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]
 const mutan = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
```

- ***/mutant***

```javascript
  curl --location --request POST 'http://localhost:3000/challenge/mutant' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
  }'
```

- ***/stats***

```javascript
  curl --location --request GET 'http://localhost:3000/challenge/stats'
```
