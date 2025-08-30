ROOT_DIR="$(dirname "$0")/.."
OUT_FILE="$ROOT_DIR/src/core/config/env.ts"
ENV_FILE="$ROOT_DIR/.env"

echo "export const env = {" > $OUT_FILE

while IFS='=' read -r key value || [ -n "$key" ]
do
  key=$(echo "$key" | tr -d '\r')
  value=$(echo "$value" | tr -d '\r')

  [ -z "$key" ] && continue
  case "$key" in \#*) continue ;; esac

  lower_key=$(echo "$key" | tr '[:upper:]' '[:lower:]')

  echo "  $lower_key: \"$value\"," >> $OUT_FILE
done < "$ENV_FILE"

echo "};" >> $OUT_FILE

echo "✅ Environment generated successfully"
