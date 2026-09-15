Header for alle sider: klikkbar ordmerke-logo til venstre (**alltid** lenke til forsida), meny til h&oslash;gre. Menypunkt kan ha undermeny (Kurs, Tenester, Boka). Under 600px kollapsar menyen til hamburger (\u2261 / \u00d7) med undermenypunkta innrykka i same liste.

```jsx
<SiteHeader
  activeHref="/kurs-og-foredrag"
  items={[
    { label: 'Heim', href: '/' },
    { label: 'Kurs', href: '/kurs-og-foredrag', children: [{ label: 'MASTERCLASS', href: '/masterclass' }] },
    { label: 'Tenester', href: '/tenester', children: [...] },
    { label: 'Boka', href: '/bok', children: [{ label: 'Bokutdrag', href: '/bok-utdrag' }] },
    { label: 'Blogg', href: '/blogg' },
    { label: 'Om meg', href: '/om' },
  ]}
/>
```

Aktiv side er markert med ekstrafeit vekt + underline, ikkje med farge eller opasitet. Inaktive punkt er **heilsvarte** \u2014 aldri dempa med `opacity`; det bryt kontrastkravet.
