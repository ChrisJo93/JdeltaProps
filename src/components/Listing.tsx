import React from "react"

//Think of this as creating an object.
//By making this property object we can tell the Listing component to expect data in this form.
//That means we can pass in properties to this component and expect them to consistently have 4 fields: id, address, image, and description.
export interface Property {
  id: number
  address: string
  image: string
  description: string
}

//We create a Listing component with a Property object as an argument. Every time we use Listing we'll pass it a property.
const Listing = (property: Property) => {
  return <div> </div>
}

export default Listing
