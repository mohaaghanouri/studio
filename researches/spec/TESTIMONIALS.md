# Testimonials — how to get four real ones this week

The site has a "What clients say" / "Was Kunden sagen" section that appears the moment
quotes land in `src/lib/copy/en.js` and `de.js` (`testimonials.items`). It stays hidden
while empty, so there is no broken-looking gap in the meantime.

## Why these have to be real

Not just good practice — law. Since 2022, **§5b UWG** (Germany's implementation of the EU
Omnibus Directive) prohibits publishing fake consumer reviews and testimonials. Your site
carries your Impressum, your name and a business address, which makes invented quotes a
straightforward legal exposure rather than a grey area.

The commercial argument points the same way. In the benchmark research, the single
best-built solo site (nicolalazzari.ai) publishes real, verifiable performance metrics —
and attributes its testimonials to "Sarah Chen", "David Kim", "Emma Rodriguez", each with
a job title and no company. It reads as fabricated, and it retroactively makes a sceptical
reader doubt the metrics too. **An empty section scores better than a fabricated one.**

## The four people to ask

You named these four. One message each, then paste the replies back.

| # | Who | What to steer them toward |
|---|---|---|
| 1 | The house-hunt client | Fewer viewings, less portal time, arriving at a signature with documents already checked |
| 2 | The IELTS / exam client | The score, or the shift from practising everything to practising the weak part |
| 3 | The engineer improving how he uses AI | A concrete thing that got faster in his actual work, not "learned a lot" |
| 4 | The creator automating her Higgsfield work | Hours off the evening, output holding up, voice still hers |

## The message — English

Personalise the first clause; the rest can go as-is.

> Hi <name>! Quick favour. I've put my consulting work on a proper site (moha.expert) and
> I'd like to show a couple of honest words from people I've actually worked with. Could
> you write one or two sentences about what changed for you after we worked together —
> whatever comes to mind, nothing polished? If you can name the concrete thing that got
> easier, that's the most useful part. I'd show it as "<first name>, <profession>" — no
> surname, no company, no link. Totally fine to say no.

## Die Nachricht — Deutsch

> Hi <Name>! Kurze Bitte. Ich habe meine Beratung auf eine richtige Website gestellt
> (moha.expert) und würde dort gern ein paar ehrliche Worte von Menschen zeigen, mit denen
> ich wirklich gearbeitet habe. Magst du mir ein, zwei Sätze schreiben, was sich durch
> unsere Zusammenarbeit für dich verändert hat — einfach so, wie es dir einfällt, nichts
> Poliertes? Am hilfreichsten ist die konkrete Sache, die leichter geworden ist. Ich würde
> es als „<Vorname>, <Beruf>" zeigen — ohne Nachname, ohne Firma, ohne Link. Ein Nein ist
> völlig in Ordnung.

## Ten prompts that produce usable answers

People asked for "a testimonial" write marketing copy. People asked a specific question
tell you something real. Send one of these if the first reply is too vague — the answers
themselves become the quote.

1. What were you doing before, and what do you do instead now?
2. How long did that task take before, and how long does it take now?
3. What did you expect to be hard that turned out not to be?
4. Was there a moment where it clicked? What were we looking at?
5. What would you tell someone in your profession who thinks this isn't for them?
6. What did you stop doing entirely?
7. What surprised you about how we worked, as opposed to what we built?
8. If you had to put one number on it — hours, weeks, applications, viewings — what is it?
9. What were you worried about before we started that didn't happen?
10. What still has your name on it that you thought a machine would take over?

## What makes one worth publishing

From the benchmark research, in order of how much they move a reader:

- **A number with a denominator.** "Forty minutes a week" beats "so much time". "9.1 across
  14 engagements" beats "clients love him".
- **A named profession and city.** "Sandra, dentist, Berlin" is checkable enough to be
  believed. A first name alone is not.
- **One concrete before/after.** The specific task that changed, in their words.
- **Their voice, not yours.** Lightly trim for length; never rewrite into marketing speak.
  A slightly awkward real sentence outperforms a polished invented one every time.
- **German quotes weigh more on the /de page** than translated English ones. If a client
  writes in German, keep the German verbatim and translate for the English page.

## When the replies arrive

Paste them here raw, with each person's first name and profession, plus explicit
confirmation they're happy to be shown that way. Then:

1. They go into `testimonials.items` in both copy files, translated for the other language.
2. `PLACEHOLDERS` flips to `false` in `src/lib/preview.js` — which removes the preview
   banner, lifts `noindex`, and restores the FAQ structured data in one move.
3. That's the last thing standing between this site and being genuinely finished.
