grep 'implements\|type'  user.actions.ts > u.txt
sed -f x.sed u.txt >o.txt
tr '\n' ' ' < o.txt > n.txt
sed 's/,/,\'$'\n/g' n.txt > q.txt
sed 's/" /"/g' q.txt > r.txt


