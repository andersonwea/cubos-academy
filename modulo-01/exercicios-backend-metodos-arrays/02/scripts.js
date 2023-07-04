const names = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego']
const groupLength = 4;

function groupSplit(names, groupLength) {
  const groups = names.reduce((groups, _, i, original) => {
    const isNewGroup = i % groupLength === 0

    if(isNewGroup) {
      groups.push({
        group: i / groupLength + 1,
        members: original.slice(i, i + groupLength)
      })
    }

    return groups
  }, [])

return groups.forEach(group => {
  console.log(`Grupo ${group.group}: ${group.members.join(', ')}\n`)

  })
}

groupSplit(names, groupLength)