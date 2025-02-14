import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimeLineElement = ({ title, event, icon, link, timeIcon, linkText, step }: { title: string, event: string, icon: React.ReactNode, link: string, timeIcon: React.ReactNode, linkText: string, step:string }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(103,58,183)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(103,58,183)' }}
      date={step}
      iconStyle={{ background: 'rgb(0, 110, 103)', color: '#fff' }}
      icon={timeIcon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{event}</h4>

      <a href={link} target='_blank' className='flex gap-4 items-center font-semibold' >
        {linkText} {icon}
      </a>
    </VerticalTimelineElement>
  );
}

export default TimeLineElement;
