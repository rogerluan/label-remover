import * as github from "@actions/github"
import * as core from "@actions/core"

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput("github_token", { required: true })
    const octokit = github.getOctokit(githubToken)
    await octokit.issues.removeAllLabels({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: github.context.issue.number,
    })
  } catch (e) {
    core.error(e)
    core.setFailed(e.message)
  }
}

run()
