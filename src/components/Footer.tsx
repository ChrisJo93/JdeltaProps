import React from "react"
import Link from "next/link"

function Footer() {
    return (
        <footer>
            <Link href="#">
                <button>
                    <span>Link 1</span>
                </button>
            </Link>
            <Link href="#">
                 <button>
                    <span>Link 2</span>
                </button>
            </Link>
            <Link href="#">
                 <button>
                    <span>Link 3</span>
                </button>
            </Link>

        </footer>
    )
}
export default Footer