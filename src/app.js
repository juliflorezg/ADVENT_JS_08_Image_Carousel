const imagesContent = [
  {
    image: 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
    caption: 'Photo by Dave Hoefler on Unsplash',
  },
  {
    image: 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
    caption: 'Photo by Sherman Yang n Unsplash',
  },
  {
    image: 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
    caption: 'Photo by Jakob Owens on Unsplash',
  },
  {
    image: 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
    caption: 'Photo by Dan Grinwis on Unsplash',
  },
  {
    image: 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    caption: 'Photo by Vincentiu Solomon on Unsplash',
  },
  {
    image: 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
    caption: 'Photo by Silas Baisch on Unsplash',
  },
  {
    image: 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
    caption: 'Photo by Eugene Golovesov on Unsplash',
  },
  {
    image: 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
    caption: 'Photo by Jennifer reynolds on Unsplash',
  },
  {
    image: 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
    caption: 'Photo by Kellen Riggin on Unsplash',
  },
  {
    image: 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
    caption: 'Photo by Rafael Hoyos on Unsplash',
  },
  {
    image: 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
    caption: 'Photo by Sonya Romanovska on Unsplash',
  },
]

console.log(imagesContent[0])

const $featuredSection = document.getElementById('feature')
const $featuredImage = $featuredSection.children[0]
const $featuredImageDescription = $featuredSection.children[1]

const $thumbnailSection = document.getElementById('thumbnails')
const $thumbnailSectionList = $thumbnailSection.children[0]

function setFeaturedImageBasedOnThumbnail(src) {
  const imageName = src.replace('./assets/', '')

  // console.log($featuredImage)
  $featuredImage.setAttribute('src', src)

  // console.log(imageName)
  const imageInfo = imagesContent.find(image => image.image === imageName)

  $featuredImageDescription.textContent = imageInfo.caption
}

function setFeaturedImageBasedOnArrows(direction) {
  // console.trace(direction) //left or right

  //get current picture selected
  const $selectedImage = document.querySelector('li.selected')
  console.log($selectedImage)

  //depending on direction, select the next one or previous one
  switch (direction) {
    case 'left':
      {
        if ($selectedImage === $thumbnailSectionList.firstElementChild) {
          console.log('I have to select the last one')

          Array.from($thumbnailSectionList.children).forEach(li =>
            li.classList.remove('selected')
          )
          $thumbnailSectionList.lastElementChild.classList.add('selected')

          let src = $thumbnailSectionList.lastElementChild
            .querySelector('a img')
            .getAttribute('src')
          setFeaturedImageBasedOnThumbnail(src)
        } else {
          const $previousImageToSelect = $selectedImage.previousElementSibling
          Array.from($thumbnailSectionList.children).forEach(li =>
            li.classList.remove('selected')
          )
          $previousImageToSelect.classList.add('selected')
          let src = $previousImageToSelect
            .querySelector('a img')
            .getAttribute('src')
          setFeaturedImageBasedOnThumbnail(src)
        }
      }
      break
    case 'right':
      {
        if ($selectedImage === $thumbnailSectionList.lastElementChild) {
          console.log('I have to select the first one')
          Array.from($thumbnailSectionList.children).forEach(li =>
            li.classList.remove('selected')
          )
          $thumbnailSectionList.firstElementChild.classList.add('selected')

          let src = $thumbnailSectionList.firstElementChild
            .querySelector('a img')
            .getAttribute('src')
          setFeaturedImageBasedOnThumbnail(src)
        } else {
          const $nextImageToSelect = $selectedImage.nextElementSibling
          Array.from($thumbnailSectionList.children).forEach(li =>
            li.classList.remove('selected')
          )
          $nextImageToSelect.classList.add('selected')
          let src = $nextImageToSelect
            .querySelector('a img')
            .getAttribute('src')
          setFeaturedImageBasedOnThumbnail(src)
        }
      }
      break
  }
}

// when I click on every thumbnail, that images should be displayed on the featured section
$thumbnailSection.addEventListener('click', e => {
  if (e.target.matches('ul li a img')) {
    e.preventDefault()
    Array.from($thumbnailSectionList.children).forEach(li =>
      li.classList.remove('selected')
    )
    e.target.closest('li').classList.add('selected')

    const src = e.target.getAttribute('src')
    setFeaturedImageBasedOnThumbnail(src)
  }
})

document.addEventListener('click', e => {
  if (e.target.matches('a.left') || e.target.matches('a.right')) {
    e.preventDefault()
    console.log(e.target)

    const direction = e.target.className

    setFeaturedImageBasedOnArrows(direction)
  } else if (
    e.target.matches('a.left img') ||
    e.target.matches('a.right img')
  ) {
    e.preventDefault()
    e.target.parentElement.click()
  }
})
