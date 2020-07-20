curl "https://tic-tac-toe-api-development.herokuapp.com/games?over-true" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{}'

echo
