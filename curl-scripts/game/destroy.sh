curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
