export DOC_SAMPLE_URL="http://localhost:10010"
s4o-mongoose-apidoc -i ./models/ -o ./controllers/_doc_models.js -e password
s4o-swagger-generator "Sportive API Service" ./controllers/ ./swagger/swagger.yaml
apidoc -i ./controllers/ -o ./apidoc/