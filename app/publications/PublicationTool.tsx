"use client"

import { publications, Tag, Publication } from "@/content/publications"
import { useState } from "react"

export default function PublicationTool() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const allTags = Array.from(new Set(publications.flatMap((item) => item.tags)))

  // available tags are those not in selectedTags
  const availableTags = allTags.filter((tag) => !selectedTags.includes(tag))

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) => [...prev, tag])
  }

  const handleTagDeselect = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag))
  }

  const filteredData =
    selectedTags.length > 0 ? publications.filter((item) => item.tags.some((tag) => selectedTags.includes(tag))) : publications

  // group publications by year
  const groupedByYear = filteredData.reduce((acc: { [year: string]: Publication[] }, pub: Publication) => {
    if (!acc[pub.year]) {
      acc[pub.year] = []
    }
    acc[pub.year].push(pub)
    return acc
  }, {})

  // sort the years in descending order
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="md:ml-8 ml-0 pt-8">
      <div className="flex flex-col md:flex-row w-full">
        {/* Filter Controls */}
        <div className="flex flex-col md:w-56 p-4">
          <h3 className="font-bold text-sm mb-3">Filter Tags</h3>
          <ul className="flex flex-wrap md:flex-col">
            {availableTags.map((tag, index) => (
              <li key={index} className="mb-2 mr-2 cursor-pointer" onClick={() => handleTagSelect(tag)}>
                <span className="inline-block rounded py-1 px-2 text-xs font-medium hover:opacity-90 transition duration-200 text-white bg-primary-800">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <h3 className="font-bold text-sm mb-3">Selected Tags</h3>
          <ul className="flex flex-wrap md:flex-col">
            {selectedTags.map((tag, index) => (
              <li key={index} className="mb-2 mr-2 cursor-pointer" onClick={() => handleTagDeselect(tag)}>
                <span className="inline-block rounded py-1 px-2 text-xs hover:opacity-80 font-medium transition duration-200 text-white bg-primary-800">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-0.5 bg-gray-200"></div>

        {/* Publication Display */}
        <div className="p-4">
          {sortedYears.map((year) => (
            <div key={year}>
              <h2 className="text-sm rounded bg-primary-800 text-white px-3 py-1 font-bold mb-4">{year}</h2>
              <ul>
                {groupedByYear[year].map((item: Publication, index: number) => (
                  <li key={index} className="mb-4 pl-4">
                    <a href={item.url} className="text-blue-600 font-medium hover:text-blue-800 transition duration-200">
                      {item.title}
                    </a>
                    <div className="text-sm text-gray-700">
                      <span>{item.authors}</span>
                      {item.additional && <span> - {item.additional}</span>}
                    </div>
                    <div className="my-1">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded py-1 px-2 mr-1 text-xs font-medium transition duration-200 text-black bg-gold-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
