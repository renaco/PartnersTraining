
const HomeLayout = (props) => {
  const [header, mainCol, rightCol, footer] = props.children
  return (
    <div>
      <header>{header}</header>
      <div className="main-section">
        <main className="main-col">{mainCol}</main>
        <section className="column">{rightCol}</section>
      </div>
      <footer className="footer">{footer}</footer>
    </div>
  )
}

HomeLayout.sections = ['Header', 'Main', 'Right Col', 'Footer'];
HomeLayout.label = ['Home Layout']
export default HomeLayout;