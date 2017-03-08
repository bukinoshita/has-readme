import test from 'ava'
import hasReadme from './..'

test(t => {
  t.false(hasReadme('fixtures/project-zero'))
  t.true(hasReadme('fixtures/project-one'))
  t.true(hasReadme())
})
