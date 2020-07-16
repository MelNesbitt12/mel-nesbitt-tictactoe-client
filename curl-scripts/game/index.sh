curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authorization: Bearer {token}" \
  --header "Content-type: application/json" \
  --data '{}'

echo
