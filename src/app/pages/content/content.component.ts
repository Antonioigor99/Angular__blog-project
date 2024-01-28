import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../date/dateFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content_cover: string = 'https://s2-valor.glbimg.com/yr6hxKK7b4wRLlH1i0L-iqTFDeY=/0x0:3840x2345/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2024/4/A/7AJx9RQMyuVpC8QIEm0g/103570974-ec-20rio-20de-20janeiro-20rj-2005-07-2023-20-20tcu-20julga-20a-20concess-c3-a3o-20do-20aeroporto-20do-20gale-c3-a3o-20nesta-20quart.jpg'
  content_title: string = 'Gol solicita reorganização financeira por meio da Justiça Americana';
  content_description: string = 'A Gol cogita entrar com um pedido de recuperação judicial nos EUA. A empresa já contratou advogados econsultores para recorrer ao Capítulo 11 da lei norte-americana de falências, similar à recuperação noBrasil. Ela escolheu os EUA porque isso abriria mais portas para mais financiamento no exterior, além de ser uma ação considerada mais simples por alguns analistas de mercado. Antes de seguir com o processo, a empresa ainda tenta, por mais duas semanas, viabilizar um plano de reestruturação fora da Justiça. Embora tenha resultados operacionais positivos, o problema é que a Gol não tem garantias o bastante para apresentar dívidas por vencer. Grande parte de seus ativos foram empenhados no acordo que a brasileira firmou com a empresa colombiana Avianca. As informações foram dadas pela coluna “Painel S.A.”, da “Folha de S.Paulo'
  private id: string | null = ''
  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id'))
    this.setValuesToComponet(this.id)
  }
  setValuesToComponet(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.content_title = result.title;
    this.content_description = result.description;
    this.content_cover = result.photo;
  }
}
