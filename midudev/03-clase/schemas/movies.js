const z = require('zod')

const moviesSchema = z.object({
  title: z.string({
    invalid_type_error: 'Move title must be a string.',
    required_error: 'Move title is required'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: 'Message must be a url'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Thriller', 'Sci-Fi', 'Crime'], {
      required_error: 'Movie genre is required',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    })
  )
})

function validateMovie (input) {
  return moviesSchema.safeParse(input)
}

function validatePartialMovie (input) {
  return moviesSchema.partial().safeParse(input)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
