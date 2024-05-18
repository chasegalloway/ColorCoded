$LOCAL_TAG = git describe --tags (git rev-list --tags --max-count=1)

$GITHUB_TAG = Invoke-RestMethod -Uri "https://api.github.com/repos/6210A/auton-help/releases/latest" | Select-Object -ExpandProperty tag_name

if ($LOCAL_TAG -ne $GITHUB_TAG) {
    npm run build-publish
}