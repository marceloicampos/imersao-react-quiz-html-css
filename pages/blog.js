import Link from 'next/link';

function Title(props) {
    return (
        <h1 style={{ color: props.color }}>{props.children}</h1>
 )
}

export default function Blog() {
  return (
    <div>
      <header>
        <Title color="red">BLOG4</Title>
          <p>
            <Link href="/"> 
              <a>HOME6</a>
            </Link>
          </p>
      </header>
    </div>
  )
}
