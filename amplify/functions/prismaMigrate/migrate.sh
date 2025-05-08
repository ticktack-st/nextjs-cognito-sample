# amplify/functions/migrate/build.sh
#!/bin/bash
set -e  # ここがキーポイント！

echo "📦 Installing dependencies..."
npm ci

echo "🏗️ Running Prisma migration..."
npx prisma migrate deploy

echo "✅ Migration completed."
echo "📦 Building the project..."

