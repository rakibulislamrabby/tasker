import React, { useState } from 'react'

export default function AddTaskModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    priority: 'Low',
    isFavorite: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Convert tags string to array of tag objects
    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '')
      .map(tag => ({
        name: tag,
        color: getRandomColor()
      }))

    const newTask = {
      id: Date.now(), // Simple ID generation
      title: formData.title,
      description: formData.description,
      tags: tagsArray,
      priority: formData.priority,
      isFavorite: formData.isFavorite
    }

    onSave(newTask)
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      tags: '',
      priority: 'Low',
      isFavorite: false
    })
    
    onClose()
  }

  const getRandomColor = () => {
    const colors = [
      '#00D991A1', '#1C92FFB0', '#FE1A1AB5', '#00B2D9CC', 
      '#8407E6A8', '#07AC67D6', '#2F43F8BF', '#AE6D0BDB', 
      '#10FBEDB2', '#BD560BB2'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1D212B] rounded-xl p-6 w-full max-w-md mx-4 border border-[rgba(206,206,206,0.12)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Add New Task</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-[#2E3443] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 bg-[#2E3443] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="e.g. Web, Python, API"
              className="w-full px-3 py-2 bg-[#2E3443] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-[#2E3443] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isFavorite"
              checked={formData.isFavorite}
              onChange={handleInputChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-sm font-medium text-gray-300">
              Mark as favorite
            </label>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 